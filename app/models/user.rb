class User < ApplicationRecord
    validates :username, :email, :bananas_count, :follows_count, :password_digest, :session_token, presence: true
    validates :username, length: { in: 6..20 }
    validates :email, uniqueness: true, length: { in: 5..55 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, uniqueness: true
    validates :password, length: { in: 6..25 }, allow_nil: true

    has_many :posts

    has_secure_password
    before_validation :ensure_session_token

    attr_accessor :password



    def self.find_by_credentials(username, password)
        User.find_by(username: username)&.authenticate(password)
        # `user&.is_password?(password)` is syntactic sugar for
        # `user && user.is_password?(password)`
    end

    
    
      def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end
    
      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
    
      def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
      end
    
      
      private
    
      def generate_unique_session_token
        # `SecureRandom::urlsafe_base64` does not guarantee uniqueness. Wrapping
        # this call in a loop ensures that no other user has the generated token.

        session_token = SecureRandom::urlsafe_base64(16)
        while User.exists?(session_token: session_token)
          session_token = SecureRandom::urlsafe_base64(16)
        end
        return session_token
      end
    
      def ensure_session_token
        self.session_token ||= generate_unique_session_token
      end
    


end
