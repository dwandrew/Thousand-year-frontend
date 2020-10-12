class Experience < ApplicationRecord
    belongs_to :memory
    validate :on => :create do
        if memory && memory.experiences.length >= 3
          errors.add(:memory, :too_many_experiences)
        end
      end

end
