if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_thousand-year-chronicler', domain: '_thousand-year-chronicler-json-api'
  else
    Rails.application.config.session_store :cookie_store, key: '_thousand-year-chronicler'
end