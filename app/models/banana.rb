class Banana < ApplicationRecord
    
    validates :giver_id, :receiver_id, :bananable_type, presence: true
    validates :giver_id, uniqueness: { scope: :post_id }




    belongs_to :post

    belongs_to :giver,
    class_name: "User"


    belongs_to :bananable, polymorphic: true, optional: true
end
