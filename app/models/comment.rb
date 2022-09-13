class Comment < ApplicationRecord
    validates :giver_id, :post_id, presence: true
    validates :body, length: { in: 0..250 }, presence: true


    belongs_to :post
    
    belongs_to :giver,
    class_name: "User"
end
