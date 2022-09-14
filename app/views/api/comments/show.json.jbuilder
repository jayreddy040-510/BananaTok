json.comment do
    json.extract! @comment, :id, :body, :giver_id, :created_at
    json.extract! @comment.giver, :username, :verified
    json.extract! @comment.post, :id
end 