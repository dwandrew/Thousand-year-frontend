class Memory < ApplicationRecord
    belongs_to :immortal
    has_many :experiences
end
