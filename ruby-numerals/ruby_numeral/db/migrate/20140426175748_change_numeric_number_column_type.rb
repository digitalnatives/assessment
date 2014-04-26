class ChangeNumericNumberColumnType < ActiveRecord::Migration
  def change
    change_column :arabic_numbers, :number_value, :bigint
  end
end
