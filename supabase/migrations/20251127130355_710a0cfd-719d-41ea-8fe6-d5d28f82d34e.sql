-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create profiles table for admin users
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (new.id, new.email, 'admin');
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create content management table
CREATE TABLE public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_key TEXT UNIQUE NOT NULL,
  content_value JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Create gallery table
CREATE TABLE public.gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  title TEXT,
  category TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  event_type TEXT,
  testimonial TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies for bookings (admin can view all, public can insert)
CREATE POLICY "Public can insert bookings"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON public.bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON public.bookings FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete bookings"
  ON public.bookings FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- RLS Policies for site_content (public read, admin write)
CREATE POLICY "Anyone can view site content"
  ON public.site_content FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage site content"
  ON public.site_content FOR ALL
  TO authenticated
  USING (true);

-- RLS Policies for gallery
CREATE POLICY "Anyone can view gallery"
  ON public.gallery_images FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage gallery"
  ON public.gallery_images FOR ALL
  TO authenticated
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view active testimonials"
  ON public.testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Authenticated users can view all testimonials"
  ON public.testimonials FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON public.testimonials FOR ALL
  TO authenticated
  USING (true);

-- Insert initial site content
INSERT INTO public.site_content (content_key, content_value) VALUES
('hero_banner', '{"title": "We Make Your Events Memorable & Stress-Free", "subtitle": "Smart Events - Your Complete Event Management Solution", "image": ""}'),
('contact_info', '{"email": "smartevents778@gmail.com", "phone": "+92 XXX XXXXXXX", "address": "Pakistan", "whatsapp": "+92XXXXXXXXXX"}'),
('social_links', '{"facebook": "", "instagram": "", "youtube": "", "twitter": ""}'),
('about_us', '{"mission": "To create unforgettable events that exceed expectations", "vision": "To be Pakistan''s leading event management service", "story": "Smart Events was founded with a passion for creating memorable celebrations..."}');

-- Insert sample testimonials
INSERT INTO public.testimonials (name, event_type, testimonial, rating, display_order) VALUES
('Ahmed Khan', 'Wedding', 'Smart Events made our wedding absolutely perfect! The decoration and lighting were stunning.', 5, 1),
('Fatima Malik', 'Birthday Party', 'Excellent service! They handled everything from start to finish. Highly recommended!', 5, 2),
('Hassan Ali', 'Corporate Event', 'Professional, punctual, and creative. Smart Events knows how to make an event special.', 5, 3);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_content_updated_at
  BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();