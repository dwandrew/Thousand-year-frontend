class Immortal < ApplicationRecord
    validates :name, presence: true
    belongs_to :user
    has_many :skills
    has_many :characters
    has_many :marks
end
