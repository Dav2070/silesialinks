Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations', sessions: 'users/sessions'}
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'start#index'
  
  delete 'entries/:entry_id', to: 'entries#destroy'
  get 'feed' => 'entries#feed', format: 'rss'
  resources :entries
end
