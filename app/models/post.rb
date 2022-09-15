class Post < ApplicationRecord
    validates :caption, :topic, presence: true
    validates :topic, inclusion: { in: ["Comedy", "Gaming", "Food", "Dance", "Beauty", "Animals", "Sports", "Other"],  message: "%{value} is not a valid topic - remember to capitalize!" }
    
    has_one_attached :video

    has_many :bananas, #as: :bananable, (after :bananas comma)
    class_name: "Banana",
    dependent: :destroy

    has_many :comments,
    dependent: :destroy
    
    belongs_to :author,
    class_name: "User"

end