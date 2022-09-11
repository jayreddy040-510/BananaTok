@posts.each do |post|
        json.set! post.id do
        json.extract! post, :id, :caption, :topic, :author_id, :banana_count, :comment_count
        json.extract! post.author, :username 
        json.bananas post.bananas
            if post.video.attached?
                json.video_url post.video.url
            end
        end
end