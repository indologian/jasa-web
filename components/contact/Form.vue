<template>
    <div class="px-8 py-10 bg-lightPrimary dark:bg-darkPrimary rounded-lg
            shadow-xl w-full lg:col-span-2">
        <form>
            <ContactPartialsInput placeholder="Nama" name="name" />
            <ContactPartialsInput placeholder=" Email" name="email" />
            <ContactPartialsInput placeholder="Telepon/Whatsapp" name="phone" />
            <ContactPartialsInput placeholder="Pesan" name="message" />
            <button type="submit"
                class="w-full p-3 text-darkPrimary font-bold transition border rounded border-primary bg-primary hover:bg-opacity-90">
                Send Message
            </button>
        </form>
    </div>
</template>