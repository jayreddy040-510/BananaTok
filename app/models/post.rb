class Post < ApplicationRecord
    validates :caption, :topic, presence: true
    
    has_one_attached :video

    has_many :bananas, #as: :bananable, (after :bananas comma)
    class_name: "Banana",
    dependent: :destroy

    has_many :comments,
    dependent: :destroy
    
    belongs_to :author,
    class_name: "User"

end