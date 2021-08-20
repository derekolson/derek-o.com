require 'open-uri'

class Vimeo < Liquid::Tag
  def initialize(tagName, markup, tokens)
    super

    args = markup.split(' ')
    @id = args[0]
    @width = 500
    @height = 281

    data = JSON.load(URI.open("https://vimeo.com/api/v2/video/#{@id}.json")).first
    if data
      @thumbnail = data["thumbnail_large"]
    end
  end

  def render(context)
    "<div class=\"videoWrapper\" data-id=\"#{@id}\" style=\"background-image: url(#{@thumbnail});\"><div class=\"play-button\"></div></div>"
  end
  Liquid::Template.register_tag("vimeo", self)
end
