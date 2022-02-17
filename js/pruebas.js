const cadenaLarga = "dskdljfdmckdjfjdkjfdkjwjljmjdksjiwjkdkljskjslkjdlksjdlksjdklsjdlkjsmsjdksjdskjdlkjsljluwjdkskljdsklsjdksjdjskljdksdsksjaldhiwdks";

function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El nombre no puede estar vacio.',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(cadenaLarga) ===
      'El nombre debe ser menor a 50 caracteres.',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre("1111") ===
      'El nombre solo puede tener letras.',
      'Validar nombre no valido que solo contuviera letras.',
  );

  console.assert(
    validarNombre('Gonzalo') === '',
    'Validar nombre no funciono con un nombre correcto',
);
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad.',
        'validarCiudad no validó que haya una ciudad seleccionada.',
    );

    console.assert(
        validarCiudad('Buenos Aires') === '',
        'validarCiudad no funcion con una ciudad validad.',
    );
}

function probarValidarRegalo (){
    console.assert(
        validarRegalo('') === "La descripcion no puede estar vacia.",
        'Validar regalo no funciono con una descripcion vacia.'
    );

    console.assert(
        validarRegalo(cadenaLarga) === 'La descripcion no debe superar los 100 caracteres.',
        'Validar regalo no funciono con una descripcion de mas de 100 caracteres.'
    );

    console.assert(
        validarRegalo("Una Muñec@") === 'La descripcion solo puede contener letras, numeros y estos caracteres , . _',
        'Validar Regalo no funciono con una cadena con caracteres invalidos.'
    )

    console.assert(
        validarRegalo('Un LEGO Minecraft') === '',
        'Validar regalo no funciono con una descripcion correcta.'
    )


}

probarValidarRegalo();
probarValidarNombre();
probarValidarCiudad();

