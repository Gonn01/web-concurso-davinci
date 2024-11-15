<!doctype html>
<html lang="en">

<head>
    <title>Contacto</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
</head>

<body class="bg-primary">

    <h1>Formulario de Contacto</h1>
    <form style="width:600px" action="procesar.php" method="POST" class="row g-3 mx-auto pb-2">


        <div class="col-md-12">
            <label class="form-label text-light ps-2">Nombre/s</label>
            <input type="text" name="nombre" class="form-control mx-auto"
                value="<?= htmlspecialchars($nombre ?? '') ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-light ps-2">Apellido/s</label>
            <input type="text" name="apellido" class="form-control mx-auto"
                value="<?= htmlspecialchars($apellido ?? '') ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-light ps-2">Telefono</label>
            <input type="text" name="telefono" class="form-control mx-auto"
                value="<?= htmlspecialchars($telefono ?? '') ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-light ps-2">Email</label>
            <input type="text" name="email" class="form-control mx-auto" value="<?= htmlspecialchars($email ?? '') ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-light ps-2">Consultas</label>
            <textarea name="mensaje" class="form-control mx-auto"
                placeholder="Escribí tu consulta aquí."><?= htmlspecialchars($mensaje ?? '') ?></textarea>
        </div>

        <div class="col-4 mt-0">
            <input type="submit" class="btn btn-secondary" value="Enviar">
        </div>
    </form>
    <?php if (!empty($errores)): ?>
        <div class="alert alert-danger">
            <ul>
                <?php foreach ($errores as $error): ?>
                    <li><?= htmlspecialchars($error) ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php elseif (isset($exito)): ?>
        <div class="alert alert-success">
            <p><?= htmlspecialchars($exito) ?></p>
        </div>
    <?php endif; ?>

</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>

</html>