-- Drop existing tables if they exist (clean slate)
drop table if exists public.security_records;
drop table if exists public.plots;
drop table if exists public.profiles;

-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade,
  name text,
  email text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Create plots table
create table public.plots (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade,
  title text not null,
  description text,
  location text,
  area numeric,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create security_records table
create table public.security_records (
  id uuid default uuid_generate_v4() primary key,
  plot_id uuid references public.plots on delete cascade,
  record_type text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.plots enable row level security;
alter table public.security_records enable row level security;

-- Profiles policies
create policy "Users can view their own profile"
  on profiles for select
  using ( auth.uid() = id );

create policy "Users can update their own profile"
  on profiles for update
  using ( auth.uid() = id );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

-- Plots policies
create policy "Users can view their own plots"
  on plots for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own plots"
  on plots for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own plots"
  on plots for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own plots"
  on plots for delete
  using ( auth.uid() = user_id );

-- Security records policies
create policy "Users can view security records for their plots"
  on security_records for select
  using ( auth.uid() = (select user_id from plots where id = plot_id) );

create policy "Users can insert security records for their plots"
  on security_records for insert
  with check ( auth.uid() = (select user_id from plots where id = plot_id) );

create policy "Users can update their security records"
  on security_records for update
  using ( auth.uid() = (select user_id from plots where id = plot_id) );

create policy "Users can delete their security records"
  on security_records for delete
  using ( auth.uid() = (select user_id from plots where id = plot_id) );

-- Create updated_at trigger function
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Add updated_at triggers
drop trigger if exists handle_updated_at on public.profiles;
create trigger handle_updated_at
  before update on public.profiles
  for each row
  execute procedure public.handle_updated_at();

drop trigger if exists handle_updated_at on public.plots;
create trigger handle_updated_at
  before update on public.plots
  for each row
  execute procedure public.handle_updated_at();

drop trigger if exists handle_updated_at on public.security_records;
create trigger handle_updated_at
  before update on public.security_records
  for each row
  execute procedure public.handle_updated_at();

-- Create function to handle new user profiles
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new user profiles
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create indexes for better performance
create index if not exists plots_user_id_idx on public.plots(user_id);
create index if not exists security_records_plot_id_idx on public.security_records(plot_id);
create index if not exists plots_created_at_idx on public.plots(created_at desc);
create index if not exists security_records_created_at_idx on public.security_records(created_at desc); 