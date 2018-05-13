Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations', sessions: 'users/sessions'}

  root 'start#index'
  get 'impressum', to: 'start#impressum'
  
  delete 'entries/:entry_id', to: 'entries#destroy'
  get 'feed' => 'entries#feed', format: 'rss'
  resources :entries
end
