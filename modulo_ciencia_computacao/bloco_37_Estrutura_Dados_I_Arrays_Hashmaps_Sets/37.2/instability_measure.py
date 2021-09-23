def instability_measure(values_list):
  time_counter = 0
  max_time = 0
  for value in values_list:
    if value == 1:
      time_counter += 1
    else:
      time_counter = 0
    if time_counter >= max_time:
      max_time = time_counter
  return max_time
