#!/usr/bin/env ruby
# -*- coding: utf-8 -*-

# embed.rb

PARAMETERS = [
    ["id", "string", "", true, true],
    ["unit_type", "string", "", true, true],
    ["rarity", "number", 0, true, false],
    ["name", "string", "", true, false],
    ["craft", "string", "", true, false],
    ["rear_units", "array<string>", [], false, true],
    ["arm_units", "array<string>", [], false, true],
    ["leg_units", "array<string>", [], false, true],

    ["hp", "number", 0, true, true],
    ["pp", "number", 0, true, true],

    ["satk", "number", 0, true, true],
    ["ratk", "number", 0, true, true],
    ["tatk", "number", 0, true, true],
    ["dex", "number", 0, true, true],

    ["sdef", "number", 0, true, true],
    ["rdef", "number", 0, true, true],
    ["tdef", "number", 0, true, true],

    ["sreg", "number", 0, true, true],
    ["rreg", "number", 0, true, true],
    ["treg", "number", 0, true, true],

    ["efreg", "number", 0, true, true],
    ["eireg", "number", 0, true, true],
    ["etreg", "number", 0, true, true],
    ["ewreg", "number", 0, true, true],
    ["elreg", "number", 0, true, true],
    ["edreg", "number", 0, true, true],
]

def regularize(arr)
    hash = {}
    PARAMETERS.each_with_index do |param, i|
        if arr[i] == "" then
            hash[ param[0] ] = param[2]
        elsif param[1] == "number" then
            hash[ param[0] ] = arr[i].to_i
        elsif param[1] == "string" then
            hash[ param[0] ] = arr[i]
        elsif param[1] == "array<string>" then
            hash[ param[0] ] = arr[i].split(",").map{|s| next s.strip()}
        end
    end
    return hash
end

def to_ts_unit(hash)
    arr = []
    PARAMETERS.each do |param|
        next if !param[3]

        if param[1] == "number" then
            arr << "%s: %d" % [param[0], hash[param[0]] ]
        elsif param[1] == "string" then
            arr << "%s: \"%s\"" % [param[0], hash[param[0]] ]
        elsif param[1] == "array<string>" then
            arr << "%s: [%s]" % [param[0], hash[param[0]].map{|s| next "\"%s\"" % s}.join(",") ]
        end
    end
    return "new UnitParameter({%s})" % arr.join(",")
end

def to_ts_unit_set(hash)
    arr = []
    PARAMETERS.each do |param|
        next if !param[4]

        if param[1] == "number" then
            arr << "%s:%d" % [param[0], hash[param[0]] ]
        elsif param[1] == "string" then
            arr << "%s:\"%s\"" % [param[0], hash[param[0]] ]
        elsif param[1] == "array<string>" then
            arr << "%s:[%s]" % [param[0], hash[param[0]].map{|s| next "\"%s\"" % s}.join(",") ]
        end
    end
    return "new UnitSetParameter({%s})" % arr.join(", ")
end
    
def main()

    dfp = open(ARGV.shift)

    rear_units = Hash.new{|h,k| h[k] = []}
    arm_units = Hash.new{|h,k| h[k] = []}
    leg_units = Hash.new{|h,k| h[k] = []}
    unit_sets = Hash.new{|h,k| h[k] = []}
    
    dfp.each_line do |line|
        next if line.size > 0 && line[0] == '#'
        line.force_encoding('utf-8')
        arr = line.chomp.split("\t").map{|s| next s.strip()}

        next if arr.size == 0 || arr[0] == ""

        rarr = regularize(arr)
        rarity = rarr["rarity"]


        case arr[1]
        when "rear"
            rear_units[rarity] << to_ts_unit(rarr)
        when "arm"
            arm_units[rarity] << to_ts_unit(rarr)
        when "leg"
            leg_units[rarity] << to_ts_unit(rarr)
        when "set"
            unit_sets[rarity] << to_ts_unit_set(rarr)
        end
    end

    dfp.close()

    tfp = open(ARGV.shift)
    ofp = open(ARGV.shift, "w")

    tfp.each_line do |line|
        ofp.puts(line)
        if line.index("%%rear_units%%") then
            arr = rear_units[0] + rear_units[13] + rear_units[12] + rear_units[11]
            ofp.puts(arr.join(",\n") + "\n")
        elsif line.index("%%arm_units%%") then
            arr = arm_units[0] + arm_units[13] + arm_units[12] + arm_units[11] 
            ofp.puts(arr.join(",\n") + "\n")
        elsif line.index("%%leg_units%%") then
            arr = leg_units[0] + leg_units[13] + leg_units[12] + leg_units[11] 
            ofp.puts(arr.join(",\n") + "\n")
        elsif line.index("%%unit_sets%%") then
            arr = unit_sets[0] + unit_sets[13] + unit_sets[12] + unit_sets[11] 
            ofp.puts(arr.join(",\n") + "\n")
        end
    end
    
    tfp.close()
    ofp.close()
    
end

if __FILE__ == $0 then
    main()
end
