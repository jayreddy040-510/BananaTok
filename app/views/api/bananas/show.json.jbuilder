        json.banana do
        json.extract! @banana, :id, :giver_id, :receiver_id, :bananable_type, :post_id, :on
        json.extract! @banana.post, :author_id
        end