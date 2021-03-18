class ApplicationController < ActionController::Base
   # Prevent CSRF attacks by raising an exception.
   # For APIs, you may want to use :null_session instead.
   protect_from_forgery with: :exception
   
   def get_entries_of_today
      @all_entries = Entry.all.order('date DESC')
      @entries = Array.new
      @all_entries.each do |entry|
         if (entry.date.day == Date.today.day) and (entry.date.month == Date.today.month)
            @entries.push entry
         end
      end
      @entries
   end
end
