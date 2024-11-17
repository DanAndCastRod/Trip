#%%
import pandas as pd
df = pd.read_excel('./list.xlsx')
df.to_json('./list.json',orient='records')

#%%
# Importamos la librería qrcode
import qrcode

# Función para generar un código QR a partir de una URL
def generar_qr(url, archivo_salida):
    """
    Genera un código QR a partir de una URL.

    Args:
        url (str): La URL que se desea convertir en código QR.
        archivo_salida (str): El nombre del archivo donde se guardará la imagen del QR.
    """
    # Crear un objeto QRCode con configuraciones básicas
    qr = qrcode.QRCode(
        version=1,  # Tamaño del QR (1 es el más pequeño)
        error_correction=qrcode.constants.ERROR_CORRECT_L,  # Nivel de corrección de errores
        box_size=10,  # Tamaño de cada caja del QR
        border=4,  # Tamaño del borde
    )

    # Añadimos la URL al QR
    qr.add_data(url)
    qr.make(fit=True)  # Ajustar el contenido al tamaño del QR

    # Crear una imagen del QR
    imagen = qr.make_image(fill_color="black", back_color="white")

    # Guardar la imagen en el archivo especificado
    imagen.save(archivo_salida)

# Ejemplo de uso
if __name__ == "__main__":
    url = "https://trip.rocks/rp/?publico"  # Reemplaza con la URL deseada
    archivo_salida = "codigo_qr.png"  # Nombre del archivo de salida
    generar_qr(url, archivo_salida)
    print(f"Código QR generado y guardado como {archivo_salida}")
