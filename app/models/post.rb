class Post < ApplicationRecord
    validates :caption, :topic, presence: true
    validates :topic, inclusion: { in: ["Comedy", "Gaming", "Food", "Education", "Love", "Animals", "Sports", "Politics"],  message: "%{value} is not a valid topic - remember to capitalize!" }
    
    has_one_attached :video

    has_many :bananas, #as: :bananable, (after :bananas comma)
    class_name: "Banana"

    has_many :comments
    
    belongs_to :author,
    class_name: "User"

end