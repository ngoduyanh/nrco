#version 410 core

in vec2 texCoords;

out vec4 out_color;

uniform sampler2D tex;
uniform float alpha;
uniform vec3 tint;

void main(void) {
    out_color = texture(tex, texCoords) * vec4(tint, 1.0);
    if(out_color.a < 0.5)   discard;
    out_color.a = alpha;
}
