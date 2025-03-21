import { supabase } from '../lib/supabase'

export const auth = {
  async signUp({ email, password, name }) {
    // First attempt to sign up
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      }
    })
    if (error) throw error
    
    // If we get a session back, the user is automatically signed in
    if (data?.session) {
      return { session: data.session, user: data.user }
    }
    
    // If we don't get a session, try to sign in immediately
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (signInError) throw signInError
    return signInData
  },

  async signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async resetPassword(email) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) throw error
  },

  async updatePassword(newPassword) {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    if (error) throw error
  },

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback)
  },

  getCurrentUser() {
    return supabase.auth.getUser()
  },

  getSession() {
    return supabase.auth.getSession()
  },
} 