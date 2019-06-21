class Tweet < ApplicationRecord
  belongs_to :user
  has_many_attached :images
  validates :body, presence: true, length: { maximum: 144 }

  def thumbnail input
    return self.images[input].variant(resize: '150x150').processed
  end
end
