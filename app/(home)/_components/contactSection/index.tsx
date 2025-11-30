import ContactForm from "@/components/common/form/contact"
import Container from "@/components/ui/container"


const ContactSection = () => {
  return (
    <section>
        <Container>
             <div className={'sectionContent'}>
                    <h2>Contact</h2>
                    <h3>My Technical Skills.</h3>
                </div>
                <div>
                    <ContactForm />
                </div>
        </Container>
    </section>
  )
}

export default ContactSection