import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://etnkugfbrdrcyrqwtdnf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bmt1Z2ZicmRyY3lycXd0ZG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MTI1MzUsImV4cCI6MjA0MjI4ODUzNX0.jN-2GBPFQPga9gonLNA54NGnFWOwaf_TUhF78nOFJ40';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

