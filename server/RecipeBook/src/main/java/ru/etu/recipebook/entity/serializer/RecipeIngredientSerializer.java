package ru.etu.recipebook.entity.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import ru.etu.recipebook.entity.RecipeIngredient;

import java.io.IOException;

public class RecipeIngredientSerializer extends JsonSerializer<RecipeIngredient> {
    @Override
    public void serialize(RecipeIngredient value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeStartObject();
        gen.writeStringField("name", value.getIngredient().getName());
        gen.writeStringField("unit", value.getUnit().name());
        gen.writeStringField("count", String.valueOf(value.getCount()));
        gen.writeEndObject();
    }
}
