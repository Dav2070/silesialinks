class ApplicationController < ActionController::Base
   # Prevent CSRF attacks by raising an exception.
   # For APIs, you may want to use :null_session instead.
   protect_from_forgery with: :exception
   helper_method :log_visit
   
   def get_auth_object
      auth = Dav::Auth.new(:api_key => ENV["DAV_API_KEY"], 
                           :secret_key => ENV["DAV_SECRET_KEY"], 
                           :uuid => ENV["DAV_UUID"], 
                           :environment => Rails.env)
   end
   
   define_method :log_visit do
      if session[:ip] != request.remote_ip
			# Log visit
			log("visit")
			session[:ip] = request.remote_ip
		end
   end

   def log(event_name)
		if !browser.bot?
			properties = Hash.new
			properties["browser_name"] = browser.name
			properties["browser_version"] = browser.version
			properties["os_name"] = browser.platform.name
			properties["os_version"] = browser.platform.version

			begin
				properties["country"] = JSON.parse(IpinfoIo::lookup(request.remote_ip).body)["country"]
			rescue Exception => e
			end

			# Remove properties with empty value
			properties.each do |key, value|
				if !value
					properties.except!(key)
				end
			end

			begin
				Dav::Event.log(get_auth_object.api_key, ENV["SILESIALINKS_APP_ID"], event_name, properties, false)
			rescue Exception => e
				puts e.message
			end
		end
   end
   
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
