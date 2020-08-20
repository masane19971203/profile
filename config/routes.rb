Rails.application.routes.draw do
  root to: 'posts#index'
  resources :myself, only: [:index]
  resources :skill, only: [:index]
end
