@bananas.each do |banana|
        json.set! banana.id do

        json.extract! banana, :id, :giver_id, :receiver_id, :bananable_type, :post_id, :on
        # json.extract! banana.post, :author_id 

        end
end