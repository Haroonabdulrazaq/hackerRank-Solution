# FizzBuzz
100.times do |i|
    i+=1
    if i%15==0
        puts "FizzBuzz"
    elsif i%5==0
        puts "Buzz"
    elsif i%3==0
        puts "Fizz"
    else
        puts i
    end
end

# Repeated String

def repeatedString(s, n) 
    remainder_count = s[0,(n % s.length)].count "a"
    whole_count =  (s.count 'a') * (n / s.length) 
    whole_count + remainder_count
end

puts repeatedString('aba', 10)

# Anagram
if s.length.odd?
    return -1
  else
    middle = s.length/2
    first_half = s[0,middle]
    second_half = s[middle,s.length-1]
     second_half =second_half.split('')
    
     first_half.each_char do |i|
      second_half.each_with_index do |ele, index|
        if i == ele
          second_half.delete_at(index)
            break
        end
      end
     end
    return second_half.length
  end


  def repeatedString(s, n)
    whole_count = n/s.length
    remainder_count = n % s.length
    remainder_count = s[0, remainder_count].count "a"
    
    num_of_a = s.count "a"
    result = (num_of_a * whole_count) + remainder_count
    puts result
    end

    repeatedString('abcac', 10)


    #Algorithm
#init_value is 3
#start_time is 1
#count down the init_time
#Increase the start_time
#If init_time is 1 double the init_time
#Keep doing until start_time == t
#return init_value

#MY CODE BUT NOT EFFICIENT FOR LARGE NUMBERS
# USE GEO-METRIC PROGREESION INSTEAD
def strangeCounter(t)
  init_value = 3
  start_time = 1
  temp = init_value
  loop_time =t-1
  loop_time.times do |i|
    init_value -= 1
    start_time += 1
    if init_value == 0
      init_value = temp * 2
      temp = init_value
    end
    
  end
  p "Init_value #{init_value}"
end
strangeCounter(10)

  #Not my code and I dont understand what is going on
  def strangeCounter(t)
    n=3
    while 2*n-2 <= t
        n*=2
      result = n-(t-(n-2))  
    end
    puts result
end

 strangeCounter(-1)

 def palindromeIndex(s)
  str = s.split('')
  strjoin = str.join
  if strjoin == strjoin.reverse #Check if its palindrome
      return -1
  else
      ((str.length)/2).times do |i|  # Loop through half of the string length
        if str[i] != str[str.length-1-i] # compare the last element of the string to the first,  if they are not equal then we have a culprit
            str.delete_at(i)               # Delete at the culprit index 
          if str.join('') ==  str.join('').reverse # check for palindrone
              return i   # if true, return the index of the culprit from front
          else
              return str.length-i   # if false, return the index of the culprit from back
          end
        end
      end
  end
end
puts palindromeIndex('aaab')