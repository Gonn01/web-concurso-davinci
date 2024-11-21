<!doctype html>
<html lang="en">

<head>
    <title>Contacto</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Nanum+Brush+Script&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">
</head>

<body style="background-color:#eee">
    <?php include 'components/header.php'; ?>
    <div style="height: 200px;"></div>

    <h1 class="container-fluid d-flex justify-content-center">Formulario de Contacto</h1>
    <form style="width:600px" action="functions/validar_formulario_contacto.php" method="POST"
        class="row g-3 mx-auto pb-2">


        <div class="col-md-12">
            <label class="form-label text-dark ps-2">Nombre/s</label>
            <input type="text" name="nombre" class="form-control mx-auto" placeholder="Escribí aquí."
                value="<?= htmlspecialchars($_SESSION['nombre']) ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-dark ps-2">Apellido/s</label>
            <input type="text" name="apellido" class="form-control mx-auto" placeholder="Escribí aquí."
                value="<?= htmlspecialchars($_SESSION['apellido']) ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-dark ps-2">Telefono</label>
            <input type="number" name="telefono" class="form-control mx-auto" placeholder="Escribí aquí."
                value="<?= htmlspecialchars($_SESSION['telefono']) ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-dark ps-2">Email</label>
            <input type="email" name="email" class="form-control mx-auto" placeholder="Escribí aquí."
                value="<?= htmlspecialchars($_SESSION['email']) ?>">
        </div>

        <div class="col-md-12">
            <label class="form-label text-dark ps-2">Consultas</label>
            <textarea name="mensaje" class="form-control mx-auto"
                placeholder="Escribí tu consulta aquí."><?= htmlspecialchars($_SESSION['mensaje']) ?></textarea>
        </div>

        <div class="col-2 mt-5">
            <a href="index.php" class="btn btn-danger"> Cancelar</a>
        </div>
        <div class="col-2 mt-5">
            <input type="submit" class="btn btn-success" value="Enviar">
        </div>
    </form>
    <?php
    if (isset($_SESSION['errores'])): ?>
        <div class="alert alert-danger">
            <ul>
                <?php foreach ($_SESSION['errores'] as $error): ?>
                    <li><?= htmlspecialchars($error) ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php unset($_SESSION['errores']); endif; ?>

    <?php if (isset($_SESSION['exito'])): ?>
        <div class="alert alert-success">
            <p><?= htmlspecialchars($_SESSION['exito']) ?></p>
        </div>
        <?php unset($_SESSION['exito']); endif; ?>
    </div>


</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>

</html>