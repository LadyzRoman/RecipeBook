package ru.etu.recipebook.service;

import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@Service
public class TransliterationServiceImpl implements TransliterationService {
    private Map<Character, String> translit = new HashMap<>();

    @PostConstruct
    public void fillMap() {
        translit.put('а', "a");
        translit.put('б', "b");
        translit.put('в', "v");
        translit.put('г', "g");
        translit.put('д', "d");
        translit.put('е', "e");
        translit.put('ё', "e");
        translit.put('ж', "zh");
        translit.put('з', "z");
        translit.put('и', "i");
        translit.put('й', "ii");
        translit.put('к', "k");
        translit.put('л', "l");
        translit.put('м', "m");
        translit.put('н', "n");
        translit.put('о', "o");
        translit.put('п', "p");
        translit.put('р', "r");
        translit.put('с', "s");
        translit.put('т', "t");
        translit.put('у', "y");
        translit.put('ф', "ph");
        translit.put('х', "h");
        translit.put('ц', "c");
        translit.put('ч', "ch");
        translit.put('ш', "sh");
        translit.put('щ', "sch");
        translit.put('ь', "");
        translit.put('ъ', "");
        translit.put('ы', "i");
        translit.put('э', "e");
        translit.put('ю', "u");
        translit.put('я', "ia");
        translit.put(' ', "_");
    }

    @Override
    public String transliterate(String cyrillic) {
        return cyrillic.toLowerCase(Locale.ROOT)
                .chars()
                .mapToObj(c -> translit.getOrDefault((char) c, String.valueOf((char) c)))
                .reduce(String::concat)
                .orElseThrow();
    }
}
