@posts.each do |post|
        json.set! post.id do
        json.extract! post, :id, :caption, :topic, :author_id
            if post.video.attached?
                json.video_url post.video.url
            end
        end
end