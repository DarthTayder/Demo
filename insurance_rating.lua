-- Calculates an insurance premium with basic factors

local function calculate_rate(age, has_accidents, coverage_level)
    local base_premium = 1000
  
    -- Age adjustment
    if age < 25 then
      base_premium = base_premium * 1.5
    elseif age > 65 then
      base_premium = base_premium * 1.3
    end
  
    -- Accident adjustment
    if has_accidents then
      base_premium = base_premium + 400
    end
  
    -- Coverage level adjustment
    if coverage_level == "standard" then
      base_premium = base_premium * 1.2
    elseif coverage_level == "premium" then
      base_premium = base_premium * 1.5
    end
  
    return base_premium
  end
  
  -- Example use
  local age = 30
  local has_accidents = false
  local coverage_level = "premium"  -- options: "basic", "standard", "premium", these are arbitrary values I made up for the sake of this. 
  
  local premium = calculate_rate(age, has_accidents, coverage_level)
  print("Calculated premium: $" .. premium)
  