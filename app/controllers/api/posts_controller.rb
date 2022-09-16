class Api::PostsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]
    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        
        if @post
            render :show
        else
            render json: {errors: "post not found!"}, status: 404
        end
    end

    def create
        debugger
        @post = Post.new(post_params)
        if @post.save!
            render '/api/posts/show'
        else
            debugger
            render json: {errors: "can't create this post"}, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
       if @post.destroy
        render json: {message: "successfull destruction"}
       else
        render json: {message: "unsuccessful destruction"}
        end

    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(update_post_params)
            render :show
        else
            render json: {error: "couldn't update this post"}, status: 404
        end
    end


    def post_params
        params.require(:post).permit(:id, :caption, :topic, :author_id, :tags, :sound,:video)
    end

    def update_post_params
        params.require(:post).permit(:id, :caption, :topic, :author_id, :tags, :sound,:video, :comment_count)
    end

end
