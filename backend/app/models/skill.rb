class Skill < ApplicationRecord
    validates :name, presence: true
    belongs_to :immortal
end
