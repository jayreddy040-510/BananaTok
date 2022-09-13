json.set! @comment.id do
    json.extract! @comment, :id, :giver_id, :post_id
    # json.extract! @comment.post
end