#!/usr/bin/env ruby
# -*- coding: utf-8 -*-

# scrape.rb

require 'open-uri'
require 'openssl'

LIST_URLS = [
    "https://pso2.swiki.jp/index.php?%E3%83%AA%E3%82%A2",
    "https://pso2.swiki.jp/index.php?%E3%82%A2%E3%83%BC%E3%83%A0",
    "https://pso2.swiki.jp/index.php?%E3%83%AC%E3%83%83%E3%82%B0"
]

UNIT_LINK_PATTERN = [
    /^リア／/,/^アーム／/,/^レッグ／/,
]

PARAMETERS = [
    "レア",
    "Type",
    "HP", "PP",
    "打撃力", "射撃力", "法撃力", "技量",
    "打撃防御", "射撃防御", "法撃防御",
    "打撃耐性", "射撃耐性", "法撃耐性",
    "炎耐性", "氷耐性", "雷耐性", "風耐性", "光耐性", "闇耐性"
]

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0"

def main()
    if ARGV.size == 0 then
        scrape_all()
    else
        scrape_debug()
    end
end

def scrape_debug()
    puts scrape_unit(ARGV[0])
end

def scrape_all()
    unit_urls = []

    puts("scrape list")
    LIST_URLS.each do |url|
        unit_urls += scrape_list(url)
    end

    units = []

    puts("scrape unit(%d)" % unit_urls.size)
    cnt = 1
    unit_urls.each do |url|
        puts("(%4d/%4d) %s" % [cnt, unit_urls.size, url])

        unit = scrape_unit(url)
        units << unit

        cnt += 1
        sleep(rand() * 4)
        print("%s\t" % unit[1])
        p unit
    end

    output(units)
end

def output(units)
    fp = open("raw.tsv", "w")

    units.each do |unit|
        arr = []
        unit.each do |item|
            if item == nil
                arr << ""
            else
                arr << item.to_s
            end
        end
        
        fp.puts(arr.join("\t"))
    end
    fp.close()
end

def scrape_list(url)
    fp = open(url, :ssl_verify_mode => OpenSSL::SSL::VERIFY_NONE, "User-Agent" => USER_AGENT)

    table_ptn = /table.*レア.*画像.*名称/
    a_ptn = /<a href="([^"]+)"[^>]*>([^<]*)<\/a>/

    ret = []
    
    fp.each_line do |line|
        mo = line.match(table_ptn)
        next if !mo

        line.scan(a_ptn).each do |anchor|
            href = anchor[0]
            text = anchor[1]

            UNIT_LINK_PATTERN.each do |ptn|
                if text.match(ptn) then
                    ret << href
                    break
                end
            end
        end
    end
    
    fp.close()

    return ret
end

def scrape_unit(url)
    fp = open(url, :ssl_verify_mode => OpenSSL::SSL::VERIFY_NONE, "User-Agent" => USER_AGENT)

    table_ptn = /table.*Type.*/
    tr_ptn = /<tr[^>]*>.*?<\/tr>/
    td_ptn = /<td[^>]*>(.*?)<\/td>/

    table = []
    
    fp.each_line do |line|
        mo = line.match(table_ptn)
        next if !mo

        line.scan(tr_ptn).each do |tr|
            arr = []
            tr.scan(td_ptn).each do |td|
                text = td[0]
                arr << text
            end
            table << arr
        end
        break
    end

    table = table.transpose
    header = table.shift
    
    data = {}
    PARAMETERS.each do |param|
        data[param] = nil
    end

    table.each do |row|
        name = row[0].gsub(/<[^>]+>/,"").strip()
        next if row[0].index("<a") || name == "" || name == "-"

        PARAMETERS.each do |param|
            header.each_with_index do |col, idx|
                next if !col.index(param)
                val = row[idx].gsub(/<[^>]+>/,"")
                val = val.to_i if param != "Type"
                data[param] = val 
            end

            next if data[param] != nil

            ptn = Regexp.compile(param + '[+＋]?(\d+)')
            row.each do |col|
                mo = col.match(ptn)
                next if !mo

                data[param] = mo[1].to_i
            end
        end

    end
    
    fp.close()

    ret = []
    PARAMETERS.each do |param|
        ret << data[param]
    end
    
    return ret

end

if __FILE__ == $0 then
    main()
end
