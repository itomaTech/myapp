class Tweet < ApplicationRecord
  belongs_to :user
  has_many_attached :images

  def thumbnail input
    return self.images[input].variant(resize: '150x150').processed
  end
end
