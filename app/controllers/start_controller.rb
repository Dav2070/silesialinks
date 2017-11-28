class StartController < ApplicationController
   
   def index
      @entries = Array.new
      @index_page = true
      
      @all_entries = Entry.all.order('date DESC')
      @entries = Array.new
      @all_entries.each do |entry|
         if (entry.date.day == Date.today.day) and (entry.date.month == Date.today.month)
            @entries.push entry
         end
      end
      
      begin
         auth = Dav::Auth.new(:api_key => ENV["DAV_API_KEY"], 
                              :secret_key => ENV["DAV_SECRET_KEY"], 
                              :uuid => ENV["DAV_UUID"], 
                              :environment => Rails.env.production? ? "production" : "development")
         Dav::Event.log(auth, ENV["SILESIALINKS_APP_ID"], "visit_start")
      rescue Exception => e
         puts e.message
      end
   end
end