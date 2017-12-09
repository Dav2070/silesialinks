class ApplicationController < ActionController::Base
   # Prevent CSRF attacks by raising an exception.
   # For APIs, you may want to use :null_session instead.
   protect_from_forgery with: :exception
   helper_method :log_visit
   
   auth = Dav::Auth.new(:api_key => ENV["DAV_API_KEY"], 
                        :secret_key => ENV["DAV_SECRET_KEY"], 
                        :uuid => ENV["DAV_UUID"], 
                        :environment => Rails.env)
   
   define_method :log_visit do
      if session[:ip] == nil || session[:ip] != request.remote_ip
         session[:ip] = request.remote_ip
         
         begin
            Dav::Event.log(auth, ENV["SILESIALINKS_APP_ID"], "visit_start")
         rescue Exception => e
            puts e.message
         end
      end
   end
end
