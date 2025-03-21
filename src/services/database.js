import { supabase } from '../lib/supabase'

export const database = {
  // Plots
  async createPlot(plotData) {
    const { data, error } = await supabase
      .from('plots')
      .insert([plotData])
      .select()
    if (error) throw error
    return data[0]
  },

  async getPlot(id) {
    const { data, error } = await supabase
      .from('plots')
      .select('*, security_records(*)')
      .eq('id', id)
      .single()
    if (error) throw error
    return data
  },

  async updatePlot(id, updates) {
    const { data, error } = await supabase
      .from('plots')
      .update(updates)
      .eq('id', id)
      .select()
    if (error) throw error
    return data[0]
  },

  async deletePlot(id) {
    const { error } = await supabase
      .from('plots')
      .delete()
      .eq('id', id)
    if (error) throw error
  },

  async getUserPlots(userId) {
    const { data, error } = await supabase
      .from('plots')
      .select('*, security_records(*)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    if (error) throw error
    return data
  },

  // Security Records
  async createSecurityRecord(recordData) {
    const { data, error } = await supabase
      .from('security_records')
      .insert([recordData])
      .select()
    if (error) throw error
    return data[0]
  },

  async getPlotSecurityRecords(plotId) {
    const { data, error } = await supabase
      .from('security_records')
      .select('*')
      .eq('plot_id', plotId)
      .order('created_at', { ascending: false })
    if (error) throw error
    return data
  },

  async updateSecurityRecord(id, updates) {
    const { data, error } = await supabase
      .from('security_records')
      .update(updates)
      .eq('id', id)
      .select()
    if (error) throw error
    return data[0]
  },

  async deleteSecurityRecord(id) {
    const { error } = await supabase
      .from('security_records')
      .delete()
      .eq('id', id)
    if (error) throw error
  },

  // Users
  async updateUserProfile(userId, updates) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
    if (error) throw error
    return data[0]
  },

  async getUserProfile(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    if (error) throw error
    return data
  },

  // Real-time subscriptions
  subscribeToPlotUpdates(plotId, callback) {
    return supabase
      .channel(`plot:${plotId}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'plots',
        filter: `id=eq.${plotId}`
      }, callback)
      .subscribe()
  },

  subscribeToSecurityRecords(plotId, callback) {
    return supabase
      .channel(`security_records:${plotId}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'security_records',
        filter: `plot_id=eq.${plotId}`
      }, callback)
      .subscribe()
  }
} 