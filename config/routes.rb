Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :groups do
      resources :events, only: [:index]
      resources :memberships, only: [:create, :destroy]
    end
    resources :events do
      resources :attendances, only: [:create, :destroy]
    end
    
  end

  root to: 'static_pages#root'
end
