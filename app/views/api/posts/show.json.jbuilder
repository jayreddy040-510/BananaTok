        json.set! @post.id do
        json.extract! @post, :id, :caption, :topic, :author_id
        json.extract! @post.author, :username
            if @post.video.attached?
                json.video_url @post.video.url
            end
        end