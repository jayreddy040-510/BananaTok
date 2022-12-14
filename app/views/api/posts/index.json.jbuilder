@posts.each do |post|
        json.set! post.id do
        json.extract! post, :id, :caption, :topic, :author_id, :banana_count, :comment_count, :sound, :tags, :created_at
        json.extract! post.author, :username, :verified, :about_me, :name
            if post.video.attached?
                json.video_url post.video.url
            end
         json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do
            json.extract! comment, :id, :body, :giver_id, :created_at, :updated_at
            json.extract! comment.giver, :username, :verified
            end
        end
    end

    # json.bananas do 
    #     @post.bananas.each do |banana|
    #         json.set! banana.id do
    #         json.extract! banana, :id, :post_id, :giver_id, :receiver_id
    #         json.extract! banana.giver, :username
    #         end
    #     end
    # end
        json.bananas post.bananas
        end
end


