module Jekyll

  class EnvironmentGenerator < Generator
    priority :highest

    def generate(site)
      site.config['url'] = ENV.fetch('JEKYLL_URL', site.config['url'])
    end
  end

end
