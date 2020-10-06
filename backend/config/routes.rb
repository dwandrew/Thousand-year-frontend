Rails.application.routes.draw do
  resources :skills
  resources :immortals
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login',    to: 'sessions#create'
  get '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  resources :users, only: [:create, :show, :index] do 
    resources :items, only: [:create, :show, :index, :destroy]
  end

  resources :users do 
    resources :immortals, only: [:create, :show, :index, :destroy] 
  end

end
