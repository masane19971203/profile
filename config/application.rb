require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Profile
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.generators do |g|
      g.stylesheets false
      g.javasctipt false
      g.helper false
      g.test_framework false
    end
  end
end
