class CreateArabicNumbers < ActiveRecord::Migration
  def change
    create_table :arabic_numbers do |t|
      t.integer :number_value

      t.timestamps
    end
  end
end
